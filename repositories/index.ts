import { getCustomRepository } from 'typeorm';
import { ConsumerRepository } from './consumer.repository';
import { EventRepository } from './event.repository';
import { CommentRepository } from './comment.repository';
import { BlockedConsumerEventRepository } from './blocked-consumers.repository';
import { LiveSessionRepository } from './liveSession.repository';
import { ConsumerEmailRepository } from './consumer-email.repository';
import { ConsumerEventRepository } from './consumer-event.repository';
import { ConsumerSubscriptionRepository } from './consumer-subscription.repository';
import { DomainRepository } from './domain.repository';
import { EventEmailRepository } from './event-email.repository';
import { InstitutionRepository } from './institution.repository';
import { PreApprovedEventEmailRepository } from './preApprovedEventEmail.repository';
import { PresentationRepository } from './presentation.repository';
import { PresentationTagRepository } from './presentation-tag.repository';
import { SubscriptionRepository } from './subscription.repository';
import { SubscriptionAddonsRepository } from './subscription-addons.repository';
import { SubscriptionAdminRepository } from './subscription-admin.repository';
import { SubscriptionTierRepository } from './subscription-tier.repository';
import { TagRepository } from './tag.repository';
import { EventFeatureFlagRepository } from './event-feature-flag.repository';

export const getBlockedConsumerEventRepository = () => getCustomRepository(BlockedConsumerEventRepository);
export const getLiveSessionRepository = () => getCustomRepository(LiveSessionRepository);
export const getCommentsRepository = () => getCustomRepository(CommentRepository);
export const getConsumersRepository = () => getCustomRepository(ConsumerRepository);
export const getConsumerEmailRepository = () => getCustomRepository(ConsumerEmailRepository);
export const getConsumerEventRepository = () => getCustomRepository(ConsumerEventRepository);
export const getConsumerSubscriptionRepository = () => getCustomRepository(ConsumerSubscriptionRepository);
export const getDomainsRepository = () => getCustomRepository(DomainRepository);
export const getEventsRepository = () => getCustomRepository(EventRepository);
export const getEventEmailRepository = () => getCustomRepository(EventEmailRepository);
export const getInstitutionRepository = () => getCustomRepository(InstitutionRepository);
export const getPreApprovedEmailsRepository = () => getCustomRepository(PreApprovedEventEmailRepository);
export const gePresentationsRepository = () => getCustomRepository(PresentationRepository);
export const gePresentationsTagRepository = () => getCustomRepository(PresentationTagRepository);
export const getSubscriptionRepository = () => getCustomRepository(SubscriptionRepository);
export const getEventFeatureFlagsRepository = () => getCustomRepository(EventFeatureFlagRepository);
export const getSubscriptionAddonsRepository = () => getCustomRepository(SubscriptionAddonsRepository);
export const getSubscriptionAdminRepository = () => getCustomRepository(SubscriptionAdminRepository);
export const getSubscriptionTierRepository = () => getCustomRepository(SubscriptionTierRepository);
export const getTagRepository = () => getCustomRepository(TagRepository);
