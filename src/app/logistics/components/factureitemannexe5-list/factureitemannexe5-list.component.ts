import { Component, Input } from '@angular/core';
import { Factureitemannexe5 } from '../../models/factureitemannexe5.model';
import { MatTableDataSource } from '@angular/material/table';
import { Factureitem } from '../../models/factureitem.model';
import { Factureitemannexe5Service } from '../../services/factureitemannexe5.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FactureitemService } from '../../services/factureitem.service';
import { Factureitemannexe5FormComponent } from '../factureitemannexe5-form/factureitemannexe5-form.component';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-factureitemannexe5-list',
  templateUrl: './factureitemannexe5-list.component.html',
  styleUrls: ['./factureitemannexe5-list.component.scss']
})
export class Factureitemannexe5ListComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  factureItemAnnexe5s!: MatTableDataSource<Factureitemannexe5>;
  factureItemAnnexe5sForChip!: Factureitemannexe5[];
  columnsToDisplay = ['annexe5', 'actions'];
  factureItemId: string;
  @Input() projectIdFromParent: any = '';
  @Input() factureIdFromParent: any = '';
  @Input() factureItemFromParent: Factureitem;

  constructor(
    private factureItemService: FactureitemService,
    private factureItemAnnexe5Service: Factureitemannexe5Service,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.factureItemId = this.factureItemFromParent.id as unknown as string;
    // this.getFactureItemFactureItemAnnexe5s(this.factureItemId);
    this.factureItemAnnexe5s = new MatTableDataSource(this.factureItemFromParent.factureitemannexe5s);
    this.factureItemAnnexe5sForChip = this.factureItemFromParent.factureitemannexe5s!;
  }

  getFactureItemFactureItemAnnexe5s(id: string): void {
    this.factureItemService.getFactureItem(id)
      .subscribe((data: Factureitem) => {
        this.factureItemAnnexe5s = new MatTableDataSource(data.factureitemannexe5s!);
        this.factureItemAnnexe5sForChip = data.factureitemannexe5s!;
        // this.factureItemAnnexe5s.sort = this.sort;
        // this.factureItemAnnexe5s.paginator = this.paginator;
      });
  }

  deleteFactureItemAnnexe5(factureItemAnnexe5Id: any) {
    this.factureItemAnnexe5Service.deleteFactureItemAnnexe5(factureItemAnnexe5Id)
      .subscribe({
        next: (data: string) => {
          console.log("deleted");
          this.getFactureItemFactureItemAnnexe5s(this.factureItemId);
        },
        error: (err: any) => {
          console.log("error when deleting");
          console.log(err);
        }
      });
  }

  openCreateFactureItemAnnexe5FormDialog(
  ) {
    console.log("inventory item from parent");
    console.log(this.factureItemFromParent);
    const dialogRef = this.dialog.open(Factureitemannexe5FormComponent, {
      data: {
        factureItemAnnexe5DataFromTable: null,
        factureItem: this.factureItemFromParent,
        projectId: this.projectIdFromParent,
        factureId: this.factureIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (factureItemAnnexe5) => {
        // console.log("here is afterClosed");
        if (factureItemAnnexe5) {
          console.log("after closed sent this:");
          console.log(factureItemAnnexe5);
          this.getFactureItemFactureItemAnnexe5s(this.factureItemId);
        }
      }
    });
  }

  openUpdateFactureItemAnnexe5FormDialog(
    factureItemId: any,
    factureItemAnnexe5DataFromTable: Factureitemannexe5,
  ) {
    factureItemAnnexe5DataFromTable.factureitem = this.factureItemFromParent;
    const dialogRef = this.dialog.open(Factureitemannexe5FormComponent, {
      data: {
        factureItemAnnexe5DataFromTable: factureItemAnnexe5DataFromTable,
        factureItemId: factureItemId,
        factureItem: this.factureItemFromParent,
        projectId: this.projectIdFromParent,
        factureId: this.factureIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getFactureItemFactureItemAnnexe5s(this.factureItemId);
        }
      }
    });
  }


  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.factureItemAnnexe5s.filter = filterValue.trim().toLowerCase();

  //   if (this.factureItemAnnexe5s.paginator) {
  //     this.factureItemAnnexe5s.paginator.firstPage();
  //   }
  // }

}
