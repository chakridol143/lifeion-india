import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  templateUrl: './support.html',
  styleUrls: ['./support.css'],
})
export class Support {
  isVideoModalOpen = false;
  activeVideoSrc = '';

  @ViewChild('modalVideo') modalVideo!: ElementRef<HTMLVideoElement>;

  openVideoFromCard(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const videoSrc = card.getAttribute('data-video');

    if (!videoSrc || videoSrc.trim() === '') {
      alert('Video link not added yet!');
      return;
    }

    this.activeVideoSrc = videoSrc;
    this.isVideoModalOpen = true;

    // Wait for DOM update then play
    setTimeout(() => {
      if (this.modalVideo?.nativeElement) {
        this.modalVideo.nativeElement.load();
        this.modalVideo.nativeElement.play().catch(() => {});
      }
    }, 50);
  }

  closeVideoModal() {
    this.isVideoModalOpen = false;

    if (this.modalVideo?.nativeElement) {
      this.modalVideo.nativeElement.pause();
      this.modalVideo.nativeElement.currentTime = 0;
    }

    this.activeVideoSrc = '';
  }

  @HostListener('document:keydown.escape')
  onEscKey() {
    if (this.isVideoModalOpen) {
      this.closeVideoModal();
    }
  }
}
