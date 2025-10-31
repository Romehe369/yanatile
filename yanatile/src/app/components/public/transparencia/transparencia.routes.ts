import { Routes } from "@angular/router";
import { AcuerdosConsejoComponent } from "./acuerdos-consejo/acuerdos-consejo.component";
import { ConovcatoriaCasComponent } from "./conovcatoria-cas/conovcatoria-cas.component";
import { InstrumentosGestionComponent } from "./instrumentos-gestion/instrumentos-gestion.component";
import { OrdenanzasMunicipalesComponent } from "./ordenanzas-municipales/ordenanzas-municipales.component";
import { ResolucionesAlcaldiaComponent } from "./resoluciones-alcaldia/resoluciones-alcaldia.component";
import { ResolucionesGerencialesComponent } from "./resoluciones-gerenciales/resoluciones-gerenciales.component";


export const transparencia_routes: Routes = [
    { path: 'acuerdos-concejo', component: AcuerdosConsejoComponent},
    { path: 'convocatorias-cas', component: ConovcatoriaCasComponent},
    { path: 'instrumentos-gestion', component: InstrumentosGestionComponent},
    { path: 'ordenanzas-municipales', component: OrdenanzasMunicipalesComponent},
    { path: 'resoluciones-alcaldia', component:ResolucionesAlcaldiaComponent},
    { path: 'resoluciones-gerenciales', component:ResolucionesGerencialesComponent}
];