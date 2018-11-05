import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transcript } from './transcript';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {
  transcriptUrl = 'assets/sample.transcript';

  constructor(private http: HttpClient) { }

  getTranscripts() {
    return this.http.get<Transcript[]>(this.transcriptUrl);
  }
}
