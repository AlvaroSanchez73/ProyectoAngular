export class ElementList {
    id_send: number;
    report_number: string;
    project: string;
    start_date: string;
    end_date: string;
    duration: string;
    declaraciones:string
    enviar:string
    total_approved: number;
    amount: number
    envioDaf: string;
    programa:string;
    daf:string

    ElementList(id_send?:number, report_number?:string, project?:string, start_date?:string,
                end_date?:string, duration?:string, declaraciones?:string, enviar?:string,
                total_approved?:number, amount?:number, envioDaf?:string, programa?:string,
                daf?:string)
    {
        this.id_send = id_send;
        this.report_number = report_number;
        this.project = project;
        this.start_date = start_date;
        this.end_date = end_date;
        this.duration = duration;
        this.declaraciones = declaraciones;
        this.enviar = enviar;
        this.total_approved = total_approved;
        this.amount = amount;
        this.envioDaf = envioDaf;
        this.programa = programa;
        this.amount = amount;
        this.daf = daf;
    }
}
