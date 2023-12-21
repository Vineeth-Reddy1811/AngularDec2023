import { Component, Output,EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl : "./header.component.html"
})
export class HeaderComponent implements OnInit,OnDestroy {

    private userSub: Subscription;
    isAuthenticated = false;
    constructor(private dataStorageService:DataStorageService,
                private authService : AuthService){}

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }


    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe( user =>{
            // this.isAuthenticated = !user ? false : true;   or we can use
            this.isAuthenticated = !!user;
            // console.log(!user);
            console.log(!!user);
        });
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}