import { Component } from '@angular/core';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awsapp';


  ngOnInit() {
    AWS.config.credentials = new AWS.Credentials({
      accessKeyId: 'my-access-key',
      secretAccessKey: 'my-secret-key'
    });

    AWS.config.update({
      region: 'us-east-1'
    });
  }

  getObject() {

    // let s3 = new AWS.S3();

    // const params = {
    //   Bucket: 'my-test-bucket-for-angular',
    //   Key: 'testfolder/tests3.txt'
    // };

    // s3.getObject(params, function (err, data) {
    //   if (err) {
    //     console.error(err);
    //   }
    //   else {
    //     // const string = new TextDecoder('utf-8').decode(data.Body);
    //     console.log(data);
    //   }
    // });

    let s3 = new AWS.S3({params: {Bucket: 'my-test-bucket-for-angular'}});

    s3.listBuckets(function(err, data) {
      if (err) {
        // this.callback(err);
        console.log(err);
      } else {
        console.log("My buckets now are:\n");
  
        for (let i: number = 0; i < data.Buckets.length; i++) {
          console.log(data.Buckets[i].Name);
        }
      }
  
      // this.callback(err);
    });

  }
// callback(err){
// console.log(err);
// }
  
}
