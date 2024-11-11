import { AfterViewInit, Component, Input } from '@angular/core';
import { ImgUploaderComponent } from "../../shared/components/img-uploader/img-uploader.component";
import { gsap } from "gsap";
import { Feature } from '../../shared/interfaces/feature';
import { FeatureCardComponent } from "../../shared/components/feature-card/feature-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImgUploaderComponent, FeatureCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // gsap.to('.rect', { y: -10, rotation: 135, duration: 4, yoyo: true, repeat: -1, ease: 'back.inOut', background: '#bbc7a4ff' })
  }

  @Input() features: Feature[] = [{
    icon: "icon/feature_fast.svg",
    title: "Blazingly Fast",
    description: "Skip the upload queues. This tool leverages your device's power for lightning-fast editing, all within your browser"
  },
  {
    icon: "icon/feature_simple.svg",
    title: "Simple & Efficient",
    description: "No complex interfaces or settings. Simply drag and drop your image, choose your desired edits, and let the magic happen"
  },
  {
    icon: "icon/feature_privacy.svg",
    title: "Privacy",
    description: "Your images stay entirely on your device throughout the process. No uploads, no cloud storage, just secure and private editing"
  },
  {
    icon: "icon/feature_free.svg",
    title: "It's Free",
    description: "Enjoy this robust image editing tool without any hidden costs or subscriptions. Accessible from any device, no installations required"
  },
  {
    icon: "icon/feature_intuitive.svg",
    title: "Intuitive Interface",
    description: "Effortlessly edit your images with our user-friendly interface. Simply select your image and choose your desired modifications. No technical expertise required!"
  },
  {
    icon: "icon/feature_flexibility.svg",
    title: "Format Flexibility",
    description: "Easily convert your images between different formats (JPEG, PNG, and more) without compromising quality"
  }]

}
