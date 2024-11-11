import { Feature } from './../../interfaces/feature';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() feature!: Feature
}
