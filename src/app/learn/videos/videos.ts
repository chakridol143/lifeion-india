import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type VideoCard = {
  title: string;
  thumb: string;
  src: string;
};

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrls: ['./videos.css']
})
export class VideosComponent {

  mainTitle = "Life Ionizer Videos: Products, Testimonials, Studies & more.";

  topVideos: VideoCard[] = [
    { title: "Life’s MXL Series under counter video overview.", thumb: "assets/videos/thumb-1.jpg", src: "" },
    { title: "Real-time hydrogen output testing of the MXL-15.", thumb: "assets/videos/thumb-2.jpg", src: "" }
  ];

  middleVideos: VideoCard[] = [
    { title: "Custom Filtration Based On Water Quality Report", thumb: "assets/videos/thumb-3.jpg", src: "" },
    { title: "MXL Series Ionizers Quick Overview", thumb: "assets/videos/thumb-4.jpg", src: "" },
    { title: "How A Life Ionizer Works In 2 Minutes", thumb: "assets/videos/thumb-5.jpg", src: "" },

    { title: "10 alkaline ionized water benefits in just 3 minutes.", thumb: "assets/videos/thumb-6.jpg", src: "" },
    { title: "Compare water ionizers to alkaline bottled water.", thumb: "assets/videos/thumb-7.jpg", src: "" },
    { title: "Alkaline on the go: a ‘Next Generation’ Pitcher of Life overview", thumb: "assets/videos/thumb-8.jpg", src: "" },

    { title: "A quick comparison: Kangen vs Life ionizers — who comes out on top?", thumb: "assets/videos/thumb-9.jpg", src: "" },
    { title: "10 essential features every water ionizer must have.", thumb: "assets/videos/thumb-10.jpg", src: "" },
    { title: "The ins and outs of an alkaline water ionizer: learn how they work.", thumb: "assets/videos/thumb-11.jpg", src: "" },
    { title: "Life Ionizers Ultraviolet Light technology overview.", thumb: "assets/videos/thumb-12.jpg", src: "" }
  ];

  sectionTitle = "Life Product Overview Videos";

  productOverviewVideos: VideoCard[] = [
    { title: "Life ionizers M-Series ‘X’ counter top video overview.", thumb: "assets/videos/thumb-13.jpg", src: "" },
    { title: "Life ionizers M-Series ‘X’ under counter video overview.", thumb: "assets/videos/thumb-14.jpg", src: "" },
    { title: "Life ionizers Next Generation M7 ionizer overview.", thumb: "assets/videos/thumb-15.jpg", src: "" }
  ];

  productOverviewMore1: VideoCard[] = [
    { title: "Life ionizers Next Generation M9 ionizer overview.", thumb: "assets/videos/thumb-16.jpg", src: "" },
    { title: "Life ionizers Next Generation M11 ionizer overview.", thumb: "assets/videos/thumb-17.jpg", src: "" },
    { title: "Life ionizers Pitcher of Life overview.", thumb: "assets/videos/thumb-18.jpg", src: "" }
  ];

  productOverviewMore2: VideoCard[] = [
    { title: "Life 9200 video overview.", thumb: "assets/videos/thumb-19.jpg", src: "" },
    { title: "Life 7700 video overview.", thumb: "assets/videos/thumb-20.jpg", src: "" },
    { title: "Life 5100 video overview.", thumb: "assets/videos/thumb-21.jpg", src: "" },
    { title: "Life LC-11 video overview.", thumb: "assets/videos/thumb-22.jpg", src: "" }
  ];

  productOverviewMore3: VideoCard[] = [
    { title: "Life’s Pitcher of Life video overview.", thumb: "assets/videos/thumb-23.jpg", src: "" },
    { title: "Life’s Dr. Life Vortex video overview.", thumb: "assets/videos/thumb-24.jpg", src: "" },
    { title: "Optional UV Light upgrade explained.", thumb: "assets/videos/thumb-25.jpg", src: "" },
    { title: "‘Water for Life’ travel bottle overview.", thumb: "assets/videos/thumb-26.jpg", src: "" }
  ];

  productOverviewSingle: VideoCard[] = [
    { title: "Bottled water readings and testing.", thumb: "assets/videos/thumb-27.jpg", src: "" }
  ];

  testimonialsTitle = "Video Testimonials";

  testimonialsTop: VideoCard[] = [
    { title: "Matt Ioannidis", thumb: "assets/videos/thumb-28.jpg", src: "" },
    { title: "Josh Hart", thumb: "assets/videos/thumb-29.jpg", src: "" },
    { title: "Ryan Kerrigan", thumb: "assets/videos/thumb-30.jpg", src: "" }
  ];

  testimonialsBottom: VideoCard[] = [
    { title: "NFL Veteran ‘Femi’ Ayanbadejo", thumb: "assets/videos/thumb-31.jpg", src: "" },
    { title: "Bryan Dumesnil & Ryan Lehr", thumb: "assets/videos/thumb-32.jpg", src: "" },
    { title: "PGA Pro Robb Nunn", thumb: "assets/videos/thumb-33.jpg", src: "" },
    { title: "Dr. Terry Rondberg", thumb: "assets/videos/thumb-34.jpg", src: "" }
  ];

  studyTitle = "Study Overview Videos";

  studyVideos: VideoCard[] = [
    { title: "An alkaline water study: alkaline ionized water’s impact on weight loss.", thumb: "assets/videos/thumb-35.jpg", src: "" },
    { title: "An alkaline water study: alkaline ionized water’s impact brain health & anti-aging.", thumb: "assets/videos/thumb-36.jpg", src: "" }
  ];
}
