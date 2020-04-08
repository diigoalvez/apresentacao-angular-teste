import { MyPipePipe } from './my-pipe.pipe';
import { TestBed } from '@angular/core/testing';

let pipeInstance: MyPipePipe;


describe('MyPipePipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyPipePipe
      ]
    });
    pipeInstance = TestBed.get(MyPipePipe);
  });

  afterEach(() => {
    pipeInstance = null;
  });


  it('create an instance', () => {
    expect(pipeInstance).toBeTruthy();
  });

  it('should transform the input', () => {
    expect(pipeInstance.transform('1')).toEqual(1);
  });

});
