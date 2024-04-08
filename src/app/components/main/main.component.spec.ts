import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { DataService } from '../../services/data.service';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach((): void => {
        TestBed.configureTestingModule({
          imports: [MainComponent],
        });
      });

    beforeEach((): void => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('input data should be array', () => {
        component.data = [];
        fixture.detectChanges();

        expect(typeof component.data).toEqual('object');
    });
});
