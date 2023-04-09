export interface IProject {
    description: string
    githubURL: string
    id: string
    isReleased: boolean
    responsive: any
    screenshotURL: string
    technologies: string[]
    thumbnailTitle: string
    thumbnailURL: string
    title: string
    websiteURL: string
}
export interface ITechnology {
    iconURL: string
    id: number
    name: string
}
export enum FETCH_STATUS {
    LOADING = 'loading',
    READY = 'ready',
    ERROR = 'error',
}
