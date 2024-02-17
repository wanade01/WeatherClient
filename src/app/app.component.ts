import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent} from './hello/hello.component'
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HelloComponent, HttpClientModule]
})

export class AppComponent{



 
}
