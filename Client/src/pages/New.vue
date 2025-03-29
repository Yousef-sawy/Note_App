<script>
import Container from 'src/components/Container.vue'
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import noteController from 'src/api/noteController'

export default defineComponent({
  components: { Container },
  name: 'PageNew',
  setup() {
    const router = useRouter()

    const state = reactive({
      note: {
        title: '',
        content: ''
      },
      errorMessage: ''
    })

    const submit = async () => {
      if (!state.note.title.trim() || !state.note.content.trim()) {
        state.errorMessage = "Title and content cannot be empty."
        return;
      }

      console.log("Submitting note:", state.note); // Debugging log

      try {
        const response = await noteController.createNote({
          title: state.note.title.trim(),
          content: state.note.content.trim()
        });

        console.log("Note created successfully:", response); // Debugging log
        router.push('/');
      } catch (error) {
        state.errorMessage = error.response?.data?.message || "Failed to create note.";
        console.error("Error creating note:", error);
      }
    }

    return { ...toRefs(state), submit }
  }
})
</script>


<template>
  <q-page padding>
    <Container>
      <h3>New Note</h3>

      <q-banner v-if="errorMessage" class="q-mb-md text-negative">
        {{ errorMessage }}
      </q-banner>

      <form @submit.prevent="submit">
        <q-input class="q-mt-sm" outlined v-model="note.title" label="Title" required />

        <q-card flat bordered class="q-mt-sm">
          <q-editor v-model="note.content" min-height="5rem" />
        </q-card>

        <div class="q-mt-md">
          <q-btn color="grey" to="/" type="reset">Cancel</q-btn>
          <q-btn class="q-ml-sm" color="positive" type="submit">Create</q-btn>
        </div>
      </form>
    </Container>
  </q-page>
</template>
