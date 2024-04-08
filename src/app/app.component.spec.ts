import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let dataServiceMock: any;

    beforeEach(async () => {
        dataServiceMock = {
            getWorker: jest.fn()
        }
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [{
                provide: DataService,
                useValue: dataServiceMock
            }]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'b2b' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('b2b');
    });
});
