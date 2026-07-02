
export interface categoryFetchParams extends categoryCreateParams {
    id ?: string
}

export interface categoryCreateParams {
    name: string,
    type: string,
    userId: string
}

  