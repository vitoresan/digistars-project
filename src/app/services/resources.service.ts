import { Injectable } from '@angular/core';
import { Resource } from '../models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  resources: Resource[] = []

  public getSystemResources = (): Resource[] => {
    this.resources = new Array<Resource>()

    this.resources.push(new Resource("Conjuntos", "/conjuntos"))
    this.resources.push(new Resource("Operações Binárias", "/operacoes-binarias"))

    return this.resources
  }
}
