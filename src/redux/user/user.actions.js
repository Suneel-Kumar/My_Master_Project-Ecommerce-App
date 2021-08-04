import { userActionsTyps } from './user.types'

export const SetCurrentUser = user => ({
    type: userActionsTyps.SET_CURRENT_USER,
    payload : user
})

