import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-pushed',
  templateUrl: './pushed.component.html',
  styleUrls: ['./pushed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushedComponent {
  @Input() array: any[] = [];
  @Input() object: any;
  @Input() value: number = 0;
  @Input() set setter(obj: any) {}
  subject$: Subject<any> = new Subject<any>();
}
