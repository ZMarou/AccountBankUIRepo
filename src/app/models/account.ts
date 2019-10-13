import { Client } from '../models/client';

export class Account {
    id: number;
    amountOverdraft: number;
    client: Client;
    balance: number;
  
    constructor(){}
  }