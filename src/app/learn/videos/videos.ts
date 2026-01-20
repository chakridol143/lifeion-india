import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {}

  mainTitle = "Life Ionizer Videos: Products, Testimonials, Studies & more.";

  // modal state
  isVideoOpen = false;
  selectedVideo: VideoCard | null = null;

  openVideo(video: VideoCard) {
    this.selectedVideo = video;
    this.isVideoOpen = true;
  }

  closeVideo() {
    this.isVideoOpen = false;
    this.selectedVideo = null;
  }

  isYoutube(url?: string): boolean {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
  }
  
  getEmbedUrl(url?: string) {
    if (!url) return '';
  
    let videoId = '';
  
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
  
    if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    }
  
    if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1].split('?')[0];
    }
  
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
  
  topVideos: VideoCard[] = [
    {
      title: "Life’s MXL Series under counter video overview.",
      thumb: "/images/Life_s_MXL_Series_under_counter_video_overview_medium.avif",
      src: "/videos/1.mp4"
    },
    { title: "Real-time hydrogen output testing of the MXL-15.", thumb: "/images/Real-time_hydrogen_output_testing_of_the_MXL-15_medium.avif", src: "/videos/2.mp4" }
  ];

  middleVideos: VideoCard[] = [
    { title: "Custom Filtration Based On Water Quality Report", thumb: "/images/Custom_Filtration_Based_On_Water_Quality_Report_medium.avif", src: "/videos/3.mp4" },
    { title: "MXL Series Ionizers Quick Overview", thumb: "/images/MXL_Series_Ionizers_Quick_Overview_medium.avif", src: "/videos/4.mp4" },
    { title: "How A Life Ionizer Works In 2 Minutes", thumb: "/images/How_A_Life_Ionizer_Works_In_2_Minutes_medium.avif", src: "/videos/5.mp4" },

    { title: "10 alkaline ionized water benefits in just 3 minutes.", thumb: "/images/10_alkaline_ionized_water_benefits_in_just_3_minutes_medium.avif", src: "/videos/6.mp4" },
    { title: "Compare water ionizers to alkaline bottled water.", thumb: "/images/Compare_water_ionizers_to_alkaline_bottled_water_medium.avif", src: "/videos/7.mp4" },
    { title: "Alkaline on the go: a ‘Next Generation’ Pitcher of Life overview", thumb: "/images/Alkaline_on_the_go_a_Next_Generation_Pitcher_of_Life_overview_medium.avif", src: "/videos/8.mp4" },

    { title: "A quick comparison: Kangen vs Life ionizers — who comes out on top?", thumb: "/images/A_quick_comparison_who_comes_out_on_top_medium.avif", src: "/videos/9.mp4" },
    { title: "10 essential features every water ionizer must have.", thumb: "/images/10_essential_features_every_water_ionizer_must_have_medium.avif", src: "/videos/11.mp4" },
    { title: "The ins and outs of an alkaline water ionizer: learn how they work.", thumb: "/images/The_ins_and_outs_of_an_alkaline_water_ionizer_learn_how_they_work_medium.avif", src: "/videos/12.mp4" },
    { title: "Life Ionizers Ultraviolet Light technology overview.", thumb: "/images/Life_Ionizers_Ultraviolet_Light_technology_overview_medium.avif", src: "/videos/13.mp4" }
  ];

  sectionTitle = "Life Product Overview Videos";

  productOverviewVideos: VideoCard[] = [
    { title: "Life ionizers M-Series ‘X’ counter top video overview.", thumb: "/images/Life_Ionizers_M-Series_X_counter_top_video_overview_medium.avif", src: "/videos/14.mp4" },
    { title: "Life ionizers M-Series ‘X’ under counter video overview.", thumb: "/images/Life_Ionizers_M-Series_X_under_counter_video_overview_medium.avif", src: "/videos/15.mp4" },
    { title: "Life ionizers Next Generation M7 ionizer overview.", thumb: "/images/Life_Ionizers_Next_Generation_M7_ionizer_overview_medium.avif", src: "/videos/16.mp4" }
  ];

  productOverviewMore1: VideoCard[] = [
    { title: "Life ionizers Next Generation M9 ionizer overview.", thumb: "/images/Life_Ionizers_Next_Generation_M9_ionizer_overview_medium.avif", src: "/videos/17.mp4" },
    { title: "Life ionizers Next Generation M11 ionizer overview.", thumb: "/images/Life_Ionizers_Next_Generation_M11_ionizer_overview_medium.avif", src: "/videos/18.mp4" },
    { title: "Life ionizers Pitcher of Life overview.", thumb: "/images/Life_Ionizers_Pitcher_of_Life_overview_medium.avif", src: "/videos/19.mp4" }
  ];

  productOverviewMore2: VideoCard[] = [
    { title: "Life 9200 video overview.", thumb: "/images/Life_9200_video_overview_medium.avif", src: "/videos/20.mp4" },
    { title: "Life 7700 video overview.", thumb: "/images/Life_7700_video_overview_medium.avif", src: "/videos/21.mp4" },
    { title: "Life 5100 video overview.", thumb: "/images/Life_5100_video_overview_medium.avif", src: "/videos/22.mp4" },
    { title: "Life LC-11 video overview.", thumb: "/images/Life_LC-11_video_overview_medium.avif", src: "/videos/23.mp4" }
  ];

  productOverviewMore3: VideoCard[] = [
    { title: "Life’s Pitcher of Life video overview.", thumb: "/images/Life_s_Pitcher_of_Life_video_overview_medium.avif", src: "/videos/24.mp4" },
    { title: "Life’s Dr. Life Vortex video overview.", thumb: "/images/Life_s_Dr._Life_Vortex_video_overview_medium.avif", src: "/videos/25.mp4" },
    { title: "Optional UV Light upgrade explained.", thumb: "/images/Optional_UV_Light_upgrade_explained_medium.avif", src: "/videos/26.mp4" },
    { title: "‘Water for Life’ travel bottle overview.", thumb: "/images/Water_for_Life_travel_bottle_overview_medium.avif", src: "/videos/27.mp4" }
  ];

  productOverviewSingle: VideoCard[] = [
    { title: "Bottled water readings and testing.", thumb: "/images/Bottled_water_readings_and_testing_176ffb4b-563f-466a-838a-b2d4a96ad250_medium.avif", src: "/videos/28.mp4" }
  ];

  testimonialsTitle = "Video Testimonials";

  testimonialsTop: VideoCard[] = [
    { title: "Matt Ioannidis", thumb: "/images/Matt_Ioannidis_testi_medium.avif", src: "/videos/29.mp4" },
    { title: "Josh Hart", thumb: "/images/josh_hart_testi_medium.avif", src: "/videos/30.mp4" },
    { title: "Ryan Kerrigan", thumb: "/images/ryan_medium.avif", src: "/videos/31.mp4" }
  ];

  testimonialsBottom: VideoCard[] = [
    { title: "NFL Veteran ‘Femi’ Ayanbadejo", thumb: "/images/NFL_Veteran_Femi_Ayanbadejo_medium.avif", src: "/videos/32.mp4" },
    { title: "Bryan Dumesnil & Ryan Lehr", thumb: "/images/Bryan_Dumesnil_Ryan_Lehr_medium.avif", src: "/videos/33.mp4" },
    { title: "PGA Pro Robb Nunn", thumb: "/images/PGA_Pro_Robb_Nunn_medium.avif", src: "/videos/34.mp4" },
    { title: "Dr. Terry Rondberg", thumb: "/images/Dr._Terry_Rondberg_medium.avif", src: "/videos/35.mp4" }
  ];

  studyTitle = "Study Overview Videos";

  studyVideos: VideoCard[] = [
    { title: "An alkaline water study: alkaline ionized water’s impact on weight loss.", thumb: "/images/An_alkaline_water_study_alkaline_ionized_water_s_impact_on_weight_loss_medium.avif", src: "/videos/36.mp4" },
    { title: "An alkaline water study: alkaline ionized water’s impact brain health & anti-aging.", thumb: "/images/An_alkaline_water_study_alkaline_ionized_water_s_impact_brain_health_anti-aging_medium.avif", src: "/videos/37.mp4" }
  ];
}
