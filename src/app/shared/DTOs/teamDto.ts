import { Byte } from "@angular/compiler/src/util";
import { PlayerDto } from "./PlayerDto";

export class TeamDto{
    id:number;
    name:string;
    country:string;
    foundationDate:Date;
    coachName:string;
    logoImage:Byte[];

    playerListDto:PlayerDto[];
}