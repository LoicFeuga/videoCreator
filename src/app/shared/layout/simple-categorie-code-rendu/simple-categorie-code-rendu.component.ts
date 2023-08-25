import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-simple-categorie-code-rendu',
  templateUrl: './simple-categorie-code-rendu.component.html',
  styleUrls: ['./simple-categorie-code-rendu.component.scss']
})
export class SimpleCategorieCodeRenduComponent implements OnInit {

  @Input() tags: Array<string> = [];
  @Input() title = "";
  @Input() codeImg?: string;
  @Input() externalLink?: string;
  safeUrl?: SafeUrl;

  ngOnInit(): void {
    if(this.externalLink) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.externalLink);
    }
  }

  constructor(private sanitizer: DomSanitizer) {

  }
}
