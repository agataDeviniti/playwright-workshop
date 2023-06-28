import { Page } from '@playwright/test';
import CreateViewActions from './CreateViewActions.act';
import FlexSearchViewActions from './FlexSearchViewActions.act';
import IssueViewActions from './IssueViewActions.act';
import NavigationActions from './NavigationActions.act';
import TreeViewActions from './TreeViewActions.act';

export default class RtmActionsContainer {
    readonly page: Page;
    readonly createViewActions: CreateViewActions;
    readonly flexSearchViewActions: FlexSearchViewActions;
    readonly issueViewActions: IssueViewActions;
    readonly navigationActions: NavigationActions;
    readonly treeViewActions: TreeViewActions;

    constructor(page: Page) {
        this.page = page;
        this.createViewActions = new CreateViewActions(page);
        this.flexSearchViewActions = new FlexSearchViewActions(page);
        this.issueViewActions = new IssueViewActions(page);
        this.navigationActions = new NavigationActions(page);
        this.treeViewActions = new TreeViewActions(page);
    }
}
