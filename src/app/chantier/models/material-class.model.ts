export class Material {
    public id?: number;
    public nameEn?: string;
    public nameFr?: string;
    public nameRu?: string;
    public nameTm?: string;
    public descEn?: string;
    public descFr?: string;
    public descRu?: string;
    public descTm?: string;
    public slug?: string;
    // category?: string;
    // image?: string;
    // created_by?: string;
    // created_at?: string;
    // date_modified?: string;

    // constructor(
    //     nameEn: string,
    //     nameFr?: string,
    //     nameRu?: string,
    //     nameTm?: string,
    //     descEn?: string,
    //     descFr?: string,
    //     descRu?: string,
    //     descTm?: string,
    //     slug?: string ) {
    //     this.id = id;
    //     this.nameEn = nameEn;
    //     this.nameFr = nameFr;
    //     this.nameRu = nameRu;
    //     this.nameTm = nameTm;
    //     this.descEn = descEn;
    //     this.descFr = descFr;
    //     this.descRu = descRu;
    //     this.descTm = descTm;
    //     this.slug = slug;
    //     }

    __str__(): string {
        return `${this.nameEn} ${this.nameFr}`;
    }

    createSlug(): string {
        return `${this.id}-${this.nameEn}`;
    }
}
