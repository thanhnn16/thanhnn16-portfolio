<template>
  <div>
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl font-semibold">{{ t('admin.settings.title') }}</h2>
            <p class="mt-1 text-sm text-gray-500">
              {{ t('admin.settings.description') }}
            </p>
          </div>
        </div>
      </template>

      <!-- Tabs -->
      <UTabs :items="tabs" :default-item="currentTab">
        <template #item="{ item }">
          {{ t(item.title) }}
        </template>
      </UTabs>

      <!-- Tab content -->
      <div class="mt-6">
        <!-- General Settings -->
        <div v-if="currentTab === 'general'" class="space-y-6">
          <UCard>
            <template #header>
              <div>
                <h3 class="text-base font-semibold">{{ t('admin.settings.general') }}</h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ t('admin.settings.generalDescription') }}
                </p>
              </div>
            </template>

            <div class="grid gap-6 sm:grid-cols-2">
              <UFormGroup
                :label="t('admin.settings.language.title')"
                :description="t('admin.settings.language.description')"
              >
                <LanguageSelector />
              </UFormGroup>

              <UFormGroup
                :label="t('admin.settings.theme.title')"
                :description="t('admin.settings.theme.description')"
              >
                <ColorMode />
              </UFormGroup>
            </div>
          </UCard>
        </div>

        <!-- Profile Settings -->
        <div v-if="currentTab === 'profile'" class="space-y-6">
          <UCard>
            <template #header>
              <div>
                <h3 class="text-base font-semibold">{{ t('admin.settings.profile') }}</h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ t('admin.settings.profileDescription') }}
                </p>
              </div>
            </template>

            <div class="grid gap-6">
              <UFormGroup
                :label="t('admin.settings.profileSettings.avatar')"
                :description="t('admin.settings.profileSettings.avatarDescription')"
              >
                <UFileInput
                  v-model="avatar"
                  accept="image/*"
                  :placeholder="t('admin.settings.profileSettings.avatarPlaceholder')"
                />
              </UFormGroup>

              <div class="grid gap-6 sm:grid-cols-2">
                <UFormGroup
                  :label="t('admin.settings.profileSettings.name')"
                >
                  <UInput
                    v-model="profile.name"
                    :placeholder="t('admin.settings.profileSettings.namePlaceholder')"
                  />
                </UFormGroup>

                <UFormGroup
                  :label="t('admin.settings.profileSettings.email')"
                >
                  <UInput
                    v-model="profile.email"
                    type="email"
                    :placeholder="t('admin.settings.profileSettings.emailPlaceholder')"
                  />
                </UFormGroup>
              </div>

              <UFormGroup
                :label="t('admin.settings.profileSettings.bio')"
                :description="t('admin.settings.profileSettings.bioDescription')"
              >
                <UTextarea
                  v-model="profile.bio"
                  :placeholder="t('admin.settings.profileSettings.bioPlaceholder')"
                  :rows="4"
                />
              </UFormGroup>
            </div>

            <template #footer>
              <div class="flex justify-end">
                <UButton
                  color="primary"
                  @click="saveProfile"
                >
                  {{ t('admin.settings.saveProfile') }}
                </UButton>
              </div>
            </template>
          </UCard>
        </div>

        <!-- Security Settings -->
        <div v-if="currentTab === 'security'" class="space-y-6">
          <UCard>
            <template #header>
              <div>
                <h3 class="text-base font-semibold">{{ t('admin.settings.security') }}</h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ t('admin.settings.securityDescription') }}
                </p>
              </div>
            </template>

            <div class="grid gap-6">
              <UFormGroup
                :label="t('admin.settings.securitySettings.currentPassword')"
              >
                <UInput
                  v-model="security.currentPassword"
                  type="password"
                  :placeholder="t('admin.settings.securitySettings.currentPasswordPlaceholder')"
                />
              </UFormGroup>

              <div class="grid gap-6 sm:grid-cols-2">
                <UFormGroup
                  :label="t('admin.settings.securitySettings.newPassword')"
                >
                  <UInput
                    v-model="security.newPassword"
                    type="password"
                    :placeholder="t('admin.settings.securitySettings.newPasswordPlaceholder')"
                  />
                </UFormGroup>

                <UFormGroup
                  :label="t('admin.settings.securitySettings.confirmPassword')"
                >
                  <UInput
                    v-model="security.confirmPassword"
                    type="password"
                    :placeholder="t('admin.settings.securitySettings.confirmPasswordPlaceholder')"
                  />
                </UFormGroup>
              </div>
            </div>

            <template #footer>
              <div class="flex justify-end">
                <UButton
                  color="primary"
                  @click="changePassword"
                >
                  {{ t('admin.settings.securitySettings.changePassword') }}
                </UButton>
              </div>
            </template>
          </UCard>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Current tab
const currentTab = ref('general')

// Tabs configuration
const tabs = [
  { id: 'general', label: t('admin.settings.general'), title: 'admin.settings.general' },
  { id: 'profile', label: t('admin.settings.profile'), title: 'admin.settings.profile' },
  { id: 'security', label: t('admin.settings.security'), title: 'admin.settings.security' }
]

// Profile data
const avatar = ref<File | null>(null)
const profile = ref({
  name: '',
  email: '',
  bio: ''
})

// Security data
const security = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// Save profile
const saveProfile = async () => {
  try {
    // TODO: Implement profile update
    // console.log('Save profile:', profile.value)
  } catch (error) {
    console.error('Error saving profile:', error)
  }
}

// Change password
const changePassword = async () => {
  try {
    // TODO: Implement password change
    console.log('Change password:', security.value)
  } catch (error) {
    console.error('Error changing password:', error)
  }
}

// Load profile data
onMounted(async () => {
  try {
    // TODO: Load profile data
  } catch (error) {
    console.error('Error loading profile:', error)
  }
})

definePageMeta({
  layout: 'admin'
})
</script>