import { LoadAzureSearchService } from '../services/load-azure-search/load-azure-search.service';
import { setupContainer } from '../shared/services/setup-container';

const container = setupContainer();
const loadSearchService = container.get(LoadAzureSearchService);

//loadSearchService.createNewIndex("jarvis-2023-09-07");
loadSearchService.loadDocument('0321f616-a84c-4175-98b2-558edfd3c711');
