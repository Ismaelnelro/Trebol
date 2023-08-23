import { useAppDispatch, useAppSelector } from "../store/redux-reducer";

import {
  onEditIconsFieldsNetwork,
  onEditFieldNetwork,
  onDeleteIconNameUrlLinks,
  onChangeNameProfile,
  onChangeBackgroundColorApp,
  onChangeAvatarProfile,
  onAddNewFieldNetwork,
  Network,
} from "../store/feature/profile/profileSlice";



const useProfileHooks = () => {


  const { profile } = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();



  /** ======= */
  /** HANDDLE */
  /** ======= */
  const handleBackGroundColor = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const color = e.currentTarget.id
    dispatch(onChangeBackgroundColorApp({ backgroundAppColor: color }));
  }

  const handleAvatar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const avatar = e.currentTarget.id
    dispatch(onChangeAvatarProfile({ avatar }));
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.currentTarget.value
    dispatch(onChangeNameProfile({ name }));
  }


  const handdleDeleteSocialMediasFields = (net: Network): void => {
    const network = profile.network.filter(n => n !== net);
    dispatch(onDeleteIconNameUrlLinks(network))
  }


  const handdleAddNewFieldNetwork = () => {
    const newField = { name: '', url: '', icon: '' };
    dispatch(onAddNewFieldNetwork(newField))
  }

  const handdleEditFields = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Network, index: number) => {
    const updatedFields = [...profile.network];
    const updatedField = { ...updatedFields[index], [field]: e.target.value };
    updatedFields[index] = updatedField;
    dispatch(onEditFieldNetwork(updatedFields))

  }

  const handdleIconsFields = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, index: number) => {
    const updatedFields = [...profile.network];
    const updatedField = { ...updatedFields[index], icon: e.currentTarget.id };
    updatedFields[index] = updatedField;
    dispatch(onEditIconsFieldsNetwork(updatedFields))

  }



  /** ========== */
  /** DB SAVING  */
  /** ========== */
  const handleSaveProfile = (): void => {
  }



  return {
    handleAvatar,
    handleName,
    handleBackGroundColor,
    handleSaveProfile,
    handdleDeleteSocialMediasFields,
    handdleAddNewFieldNetwork,
    handdleEditFields,
    handdleIconsFields,
    profile
  }
}

export default useProfileHooks