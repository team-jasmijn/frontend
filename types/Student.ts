export interface ProfileSetting {
    key : string,
    value : string
}
export default interface Student {
    name : string
    profileSettings : ProfileSetting[]
}