export type DataServiceType = {
  id:string
  message:string
  timestamp:string
}

export type GetDataServiceReturnType = DataServiceType[]

export type UpdateDataServiceType = {
  id:string
  messageText:string
}

export interface FirebaseTimestamp {
  seconds:number
  nanoseconds:number
}
