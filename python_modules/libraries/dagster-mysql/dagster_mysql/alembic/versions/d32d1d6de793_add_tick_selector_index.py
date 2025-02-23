"""add tick selector index

Revision ID: d32d1d6de793
Revises: 5b467f7af3f6
Create Date: 2022-03-25 10:29:10.895341

"""
from dagster.core.storage.migration.utils import create_tick_selector_index

# revision identifiers, used by Alembic.
revision = "d32d1d6de793"
down_revision = "5b467f7af3f6"
branch_labels = None
depends_on = None


def upgrade():
    create_tick_selector_index()


def downgrade():
    pass
