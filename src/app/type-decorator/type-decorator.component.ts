import {Component, Directive} from '@angular/core';

@Component({
  selector: 'app-type-decorator',
  templateUrl: './type-decorator.component.html',
  styleUrls: ['./type-decorator.component.css'],
  standalone: true,
})
export class TypeDecoratorComponent {
}
@Component({
  selector: '[app-type-decorator]',
  templateUrl: './type-decorator.component.html',
  styleUrls: ['./type-decorator.component.css'],
  standalone: true
})
export class TypeDecoratorComponentWeirdSelector {
}

@Directive({
  selector: '[app-type-decorator]',
  standalone: true
})
export class TypeDecoratorAsDirective {

}
