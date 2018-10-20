import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor() { 
    this.items = [
      {title: 'Безопасность объекта', subtitle: 'По статистике, после установки видеонаблюдения на объекте, неприятных происшествий становится меньше', ico: 'protect-ico'},
      {title: 'Запись данных', subtitle: 'Просматривайте запись данных в любое удобное для Вас время. Максимальный срок хранения может достигать до нескольких месяцев', ico: 'rec-ico'},
      {title: 'Удаленный контроль', subtitle: 'Вы сможете удалённо просматривать, что сейчас снимают камеры с телефона, планшета или ПК', ico: 'device-ico'},
    ];
  }

  ngOnInit() {
  }

  items: Array<any>;

}
