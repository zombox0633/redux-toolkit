export type DataServiceType = {
  id:string
  message:string
  timestamp:string
}

export type GetDataServiceReturnType = DataServiceType[]

export interface FirebaseTimestamp {
  seconds:number
  nanoseconds:number
}
