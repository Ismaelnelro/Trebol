import { PayloadAction } from "@reduxjs/toolkit"
import { Network, profileInitialState, Styles } from "./profileSlice"



function ActionChangeNameProfile(state: profileInitialState, { payload }: PayloadAction<{ name: string }>) {
  state.name = payload.name
}
function ActionChangeAvatarProfile(state: profileInitialState, { payload }: PayloadAction<{ avatar: string }>) {
  state.name = payload.avatar
}

function ActionChangeIconNameUrlLinks(state: profileInitialState, { payload }: PayloadAction<Network>) {
  state.profile.network = {
    ...state.profile.network,
    name: payload.name,
    icon: payload.icon,
    url: payload.url
  }
}
function ActionChangeBackgroundColorApp(state: profileInitialState, { payload }: PayloadAction<Styles>) {
  state.profile.styles = {
    ...state.profile.styles,
    backgroundAppColor: payload.backgroundAppColor,
  }
}

export {
  ActionChangeNameProfile,
  ActionChangeIconNameUrlLinks,
  ActionChangeBackgroundColorApp,
  ActionChangeAvatarProfile
}