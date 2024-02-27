/* eslint-disable @typescript-eslint/ban-types */
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject, filter } from 'rxjs';

@Component({
  selector: 'my-monorepo-input-states',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inputStates.component.html',
  styleUrls: ['./inputStates.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputStatesComponent),
      multi: true,
    },
    /* {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputStatesComponent),
      multi: true
    } */
  ],
})
export class InputStatesComponent implements ControlValueAccessor, OnDestroy {
  value = '';
  state = 'initial';
  touched = false;
  control = new FormControl('');
  unusbscribe$ = new Subject<void>();
  @Output() textChange = new EventEmitter<string>();

  private onChange!: Function;
  private onTouch!: Function;

  constructor() {
    if (this.onTouch != undefined) {
      this.control.valueChanges
        .pipe(filter((data) => !!data))
        .subscribe((val) => {
          this.onChange(val as string);
          this.state = 'filled';
        });
    }
  }

  ngOnDestroy(): void {
    this.unusbscribe$.next();
    this.unusbscribe$.complete();
  }

  changeText($event: any): void {
    if (!this.isInForm) {
      this.value = $event.target.value;
      this.state = 'filled';
      this.textChange.emit(this.value);
    } else {
      this.onChange($event.target.value);
      this.onTouch();
    }
  }

  focus() {
    this.state = 'focus';
    this.touched = true;
  }
  onBlur() {
    console.log(this.value);

    if (this.value.length == 0 && !this.value) {
      this.state = 'error';
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = (value: string) => {
      fn(value);
      this.value = value;
      if (value) {
        this.state = 'filled';
      }
    };
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled;
  }

  get isInForm() {
    return this.onChange !== undefined && this.onTouch !== undefined;
  }
}
/* data = '';
  value=''
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  private onChanges = (_:any)=>{};  
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  private onTouched  = ()=>{};  
  
  @Input() state  = 'initial'
  /*   
control = new FormControl();
 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInput(value:any){
    this.value = value
    this.onTouched()
    this.onChanges(this.value)
  }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.touched && !control.value) {
      this.state = 'error'
    }else if(control.value ){
      this.state = 'filled'
    }
    return control
  }
   ngOnInit(): void {
      this.control.valueChanges.subscribe(value => {
          this.onChanges(value)
          this.validate(this.control)
      })
      return
  } 

  writeValue(value: string): void {
    this.data = value
    console.log('ola');
    
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn
  }
  
  // eslint-disable-next-line @typescript-eslint/ban-types
  registerOnTouched(fn: Function): void {     
    this.onTouched = ()=> {
      if(this.state === 'initial'){
        this.state = 'focus'
      }
      fn()
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled  
  } 
  
  focus(){
    this.onTouched()
  }   */
