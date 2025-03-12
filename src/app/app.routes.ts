import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProgramsComponent } from './programs/programs.component';

export const routes: Routes = [
    { path: '', component: CalculatorComponent},
    { path: 'calculator', component: CalculatorComponent},
    { path: 'programs', component: ProgramsComponent},
];
