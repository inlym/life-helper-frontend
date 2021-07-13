import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { QrcodeComponent } from './components/qrcode/qrcode.component'
import { QrcodeService } from './components/qrcode/qrcode.service'

const routes: Routes = [{ path: '', component: QrcodeComponent }]

@NgModule({
  declarations: [QrcodeComponent],
  providers: [QrcodeService],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
