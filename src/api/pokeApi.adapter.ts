// Se usa .adapter en el nombre porque adaptamos una funcionalidad externa en el código -> buena práctica
import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class pokeFetchApiAdapter implements HttpAdapter {

    async get<T>(url: string): Promise<T> {
        const respo = await fetch(url);
        const data = await respo.json();

        return data;
    }
}

export class PokeAxiosApiAdapter implements HttpAdapter {

    // Se hace de esta manera porque en caso de cambiar la version del paquete, se sabría en que parte se encuentra
    private readonly axios = axios;

    // T es un estándar que se usa para el primer genérico
    async get<T>(url: string): Promise<T> {
        // Al usar el genérico em ambos lados se le dice que van a ser del mismo tipo en ambos lados
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post(url: string, data: any) {

    }
}