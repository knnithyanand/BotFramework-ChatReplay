import { Component, OnInit } from '@angular/core';
import { TranscriptService } from '../services/transcript/transcript.service';
import { Transcript } from '../services/transcript/transcript';

@Component({
  selector: 'app-chat-replay',
  templateUrl: './chat-replay.component.html',
  styleUrls: ['./chat-replay.component.scss']
})
export class ChatReplayComponent implements OnInit {
  transcripts: Transcript[];

  constructor(private transcriptService: TranscriptService) { }

  ngOnInit() {
    this.showTranscript();
  }

  showTranscript() {
    this.transcriptService.getTranscripts()
      .subscribe((data: any) => {
        this.transcripts = data;
        const t = this.transcripts[1];
        console.log(t.from.role);
      }
      );
  }
}
