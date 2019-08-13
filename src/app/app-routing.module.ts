import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';
import { CuatroComponent } from './cuatro/cuatro.component';


const routes: Routes = [
  {path:'uno', component: UnoComponent},
{path:'dos', component: DosComponent},
{path:'tres', component: TresComponent},
{path:'cuatro', component: CuatroComponent},
]
;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [UnoComponent,DosComponent,TresComponent,CuatroComponent]