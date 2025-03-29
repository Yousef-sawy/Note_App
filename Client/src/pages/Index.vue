<script>
/* eslint-disable */
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Container from 'src/components/Container.vue'
import NoteCard from 'src/components/NoteCard.vue'
import noteController from 'src/api/noteController'

export default defineComponent({
  components: { NoteCard, Container },
  name: 'PageIndex',
  setup() {
    const notes = ref([])
    const router = useRouter()

    const fetchNotes = async () => {
      try {
        notes.value = await noteController.getNotes()
      } catch (error) {
        console.error("Failed to fetch notes:", error)
      }
    }

    // Function to strip HTML tags for card previews
    const stripHtml = (html) => {
      if (!html) return '';
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    }

    onMounted(fetchNotes)

    return { router, notes, stripHtml }
  }
})
</script>

<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Your Notes</h3>
        <q-btn round color="positive" icon="add" to="/new" />
      </div>

      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :description="stripHtml(note.content)"
        @click="router.push(`/notes/${note.id}`)"
      />

      <div v-if="notes.length === 0">You have not created any notes.</div>
    </Container>
  </q-page>
</template>
