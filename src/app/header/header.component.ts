import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() onSelected = new EventEmitter()
  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
  }
  selected(item:string){
    this.onSelected.emit(item)
  }
  onSaveData(){
    this.dataStorage.saveData()
  }
  onFetchData(){
    this.dataStorage.fetchData().subscribe()
  }
}
