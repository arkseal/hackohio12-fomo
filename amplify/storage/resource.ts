import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'fomoPhotos',
    access: (allow) => ({
      'fomoPhotos/EventImage/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write'])
      ]
    }),
    /* access: (allow) => ({
      'profile-pictures/{entity_id}/*': [
        allow.guest.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
      'picture-submissions/*': [
        allow.authenticated.to(['read','write']),
        allow.guest.to(['read', 'write'])
      ],
    }) */
  });