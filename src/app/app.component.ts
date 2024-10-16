import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Canvas, Rect } from 'fabric'; // browser

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('canvas', { static: true }) canvasElement: ElementRef<HTMLCanvasElement> | undefined;
  title = 'fabri-js-playground';
  canvas: Canvas | undefined;

  ngOnInit(): void {
    if (this.canvasElement) {
      this.canvas = new Canvas(this.canvasElement.nativeElement);
      this.addRectangle();
    }
  }

  addRectangle(): void {
    const rect = new Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 200,
      height: 100,
    });
    this.canvas?.add(rect);
  }
}


