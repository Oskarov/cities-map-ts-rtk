export interface IPoint {
    id: string,
    longitude: string,
    latitude: string,
    name: string
}

export interface IMainPoints {
    downloadDate: string
    points: IPoint[]
}