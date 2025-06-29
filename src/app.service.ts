import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHellon(): string {
    return 'welcome  ' + 'nouran';
  }
  getHelloa(): string {
    return 'welcome  ' + 'amal';
  }
  getHellof(): string {
    return 'welcome  ' + 'fayez';
  }
  getHellow(): string {
    return 'welcome  ' + 'wafaa';
  } 
  
  getHellowafaa(): string {
    return 'welcome  ' + 'wafaawafa wafaa';
  }
}
