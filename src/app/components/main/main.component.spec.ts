import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MainComponent],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(MainComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
