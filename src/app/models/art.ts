export class Art{
    pagination!: {
        total: number
        limit: number
        offset: number
        current_page: number
        ext_url: string
    }
    data!: [
        {
            id : number
            title: string
            date_display: string
            artist_display: string
            image_id: string
        }
    ]
    config!: {
        iiif_url: string
        website_url: string
    }
}