import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ForumComponent} from '@app/modules/forum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(private breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}