<script>
/* eslint-disable */
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Container from 'src/components/Container.vue'
import noteController from 'src/api/noteController'

export default {
  components: { Container },
  setup() {
    const note = ref(null)
    const editing = ref(false)
    const route = useRoute()
    const router = useRouter()
    const noteId = computed(() => parseInt(route.params.id))

    const fetchNote = async () => {
      try {
        const response = await noteController.getNote(noteId.value)
        note.value = response
      } catch (error) {
        console.error("Error fetching note:", error)
        router.push('/') // Redirect if note not found
      }
    }

    const remove = async () => {
      try {
        await noteController.deleteNote(noteId.value)
        router.push('/')
      } catch (error) {
        console.error("Error deleting note:", error)
      }
    }

    const updateNote = async () => {
      try {
        await noteController.updateNote(noteId.value, note.value)
        editing.value = false
      } catch (error) {
        console.error("Error updating note:", error)
      }
    }

    onMounted(fetchNote)

    return { note, editing, remove, updateNote, router }
  }
}
</script>

<template>
  <q-page padding>
    <Container v-if="note">
      <q-card class="q-pa-md q-mb-md shadow-2 rounded-borders">
        <!-- ✅ Edit Mode -->
        <div v-if="editing">
          <form @submit.prevent="updateNote">
            <q-input v-model="note.title" label="Title" filled class="q-mb-md" />

            <!-- ✅ q-editor with existing text -->
            <q-card flat bordered class="q-mb-md">
              <q-editor v-model="note.content" min-height="8rem" />
            </q-card>

            <div class="row justify-end q-gutter-sm">
              <q-btn color="positive" type="submit" label="Save" />
              <q-btn color="grey" label="Cancel" @click="editing = false" />
            </div>
          </form>
        </div>

        <!-- ✅ View Mode -->
        <div v-else>
          <div class="row items-center justify-between">
            <h3 class="q-mb-md q-mt-md text-primary">{{ note.title }}</h3>
            <div class="q-gutter-sm">
              <q-btn round color="secondary" icon="edit" @click="editing = true" />
              <q-btn round color="red" icon="delete" @click="remove" />
              <q-btn round color="grey" icon="arrow_back" @click="router.push('/')" />
            </div>
          </div>

          <!-- ✅ Displays formatted text -->
          <q-card flat bordered class="q-pa-md bg-grey-2 q-mt-md">
            <div v-html="note.content"></div>
          </q-card>
        </div>
      </q-card>
    </Container>

    <!-- ✅ Loading State -->
    <div v-else class="text-center q-pa-md">
      <q-spinner color="primary" size="2em" />
      <p class="q-mt-sm">Loading...</p>
    </div>
  </q-page>
</template>
