export class Daf {
    id_send: number;
    declaraciones: number;
    anio: number;
    periodo: number;
    enviar: number;
    envioDaf: string;
    recibida_programa:string;
    recibida_daf:string

    Daf(id_send?:number, anio?:number, periodo?:number, declaraciones?:number, enviar?:number,
        envioDaf?:string, recibida_programa?:string, recibida_daf?:string)
    {
        this.id_send = id_send;
        this.declaraciones = declaraciones;
        this.anio = anio;
        this.periodo = periodo
        this.enviar = enviar;
        this.envioDaf = envioDaf;
        this.recibida_programa = recibida_programa;
        this.recibida_daf = recibida_daf;
    }
}
