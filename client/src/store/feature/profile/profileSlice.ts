import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionChangeAvatarProfile, ActionChangeBackgroundColorApp, ActionChangeIconNameUrlLinks, ActionChangeNameProfile } from "./profileActions";

export interface Network {
  icon?: string;
  name?: string;
  url?: string;
}

export interface Styles {
  backgroundAppColor?: string;
  fontFamilyApp?: string;
  links?: {
    fontSizeText?: string
  }
}

export interface Profile {
  network?: Network;
  styles?: Styles;
}

export interface profileInitialState {
  avatar: string;
  name: string;
  profile: Profile

}

const initialState: profileInitialState = {
  avatar: '',
  name: '',
  profile: {
    network: {},
    styles: {}
  }
}


export const profileSlice = createSlice({
  name: "Profile",
  initialState: initialState,
  reducers: {
    onChangeNameProfile: (state, action: PayloadAction<{ name: string }>) => ActionChangeNameProfile(state, action),
    onChangeAvatarProfile: (state, action: PayloadAction<{ avatar: string }>) => ActionChangeAvatarProfile(state, action),
    onChangeIconNameUrlLinks: (state, action: PayloadAction<Network>) => ActionChangeIconNameUrlLinks(state, action),
    onChangeBackgroundColorApp: (state, action: PayloadAction<Styles>) => ActionChangeBackgroundColorApp(state, action),
  }
})


export const { onChangeBackgroundColorApp, onChangeAvatarProfile, onChangeIconNameUrlLinks, onChangeNameProfile } = profileSlice.actions
export default profileSlice.reducer